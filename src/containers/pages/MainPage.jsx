import { Header } from "../../components/header/Header";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { MainHome } from "../../components/mainhome/MainHome";

export function MainPage() {
  return (
    <LayoutFull>
        <Header />
        <MainHome /> 
    </LayoutFull>
  );
}