import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { routes } from "../routes";

export const CocktailDetail = () => {
  return (
    <>
      <h1 className="uppercase text-4xl text-gray-600 text-center">
        CocktailDetail
      </h1>
    </>
  );
};
