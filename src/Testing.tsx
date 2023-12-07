import { FormEvent, useEffect, useState } from "react";
import LoginButton from "./components/Auth0/LoginButton";
import LogoutButton from "./components/Auth0/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Testing = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const getUserToken = async () => {
      if (user) {
        try {
          const accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: import.meta.env.VITE_REACT_APP_AUTH0_APP + "/api/v2/",
              scope: "read:current_user",
            },
          });
          setUserToken(accessToken);
        } catch (error) {
          console.log((error as Error).message);
        }
      }
    };

    getUserToken();
  }, [getAccessTokenSilently, user]);

  const getImage = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;

      const id = target.imageId.value;

      const result = await fetch(
        import.meta.env.VITE_REACT_APP_API_BASE_URL + `/images/file/${id}`,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const addImage = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const data = new FormData(target);

      const shared = target.shared.value === "on" ? "true" : "";
      data.set("shared", shared);

      const result = await fetch(
        import.meta.env.VITE_REACT_APP_API_BASE_URL + `/images`,
        {
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const addObject = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const data = new FormData(target);

      const shared = target.shared.value === "on" ? "true" : "";
      data.set("shared", shared);

      const forSale = target.forSale.value === "on" ? "true" : "";
      data.set("forSale", forSale);

      const object = JSON.parse(JSON.stringify(Object.fromEntries(data)));
      object.dateAcquired = Number(object.dateAcquired);
      object.dateFirstFlower = Number(object.dateFirstFlower);
      object.dateLastFlower = Number(object.dateLastFlower);
      object.dateRemoved = Number(object.dateRemoved);
      object.events = [];

      const result = await fetch(
        import.meta.env.VITE_REACT_APP_API_BASE_URL + "/objects",
        {
          method: "POST",
          body: JSON.stringify(object),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>WORK IN PROGRESS</div>
      <hr />
      <form onSubmit={getImage}>
        get image
        <input type="text" name="imageId" placeholder="imageId" />
        <input type="submit" value="Submit" />
      </form>
      <hr />

      <form onSubmit={addImage} encType="multipart/form-data">
        post image
        <input
          type="file"
          name="image"
          accept="image/png, image/jpg, image/bmp, image/webp"
        />
        <input type="text" name="userText" placeholder="userText" />
        <input type="text" name="userGroup" placeholder="userGroup" />
        <input type="text" name="objectLink" placeholder="objectLink" />
        <input type="checkbox" name="shared" />
        <input type="submit" value="Submit" />
      </form>
      <hr />

      <form onSubmit={addObject}>
        object
        <input type="text" name="genusName" placeholder="genusName" />
        <input type="text" name="speciesName" placeholder="speciesName" />
        <input type="text" name="commonName" placeholder="commonName" />
        <input
          type="text"
          name="identifyingInfo"
          placeholder="identifyingInfo"
        />
        <input type="text" name="placeOfOrigin" placeholder="placeOfOrigin" />
        <input type="text" name="acquiredFrom" placeholder="acquiredFrom" />
        <input type="text" name="growingNote" placeholder="growingNote" />
        <input type="text" name="freeNote" placeholder="freeNote" />
        <input type="text" name="publication" placeholder="publication" />
        <input type="text" name="purchasePrice" placeholder="purchasePrice" />
        <input type="text" name="salePrice" placeholder="salePrice" />
        <input type="text" name="collectionTag" placeholder="collectionTag" />
        <input type="checkbox" name="forSale" />
        <input type="checkbox" name="shared" />
        <input type="number" name="dateAcquired" />
        <input type="number" name="dateFirstFlower" />
        <input type="number" name="dateLastFlower" />
        <input type="number" name="dateRemoved" />
        <input type="submit" value="Submit" />
      </form>
      <LoginButton />
      <LogoutButton />
    </>
  );
};

export default Testing;
