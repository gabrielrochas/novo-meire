import { WidgetContainer, HeaderContainer } from "./styles";

interface WidgetOneProps {
  icon: string;
  headerText: string;
  bodyContent: string;
}
export const WidgetOne = ({ bodyContent, headerText, icon }: WidgetOneProps) => {
  return (
    <WidgetContainer>
      <HeaderContainer>
        <div>
          {icon}
        </div>
        <div>
          <h1>{headerText}</h1>
        </div>
      </HeaderContainer>
      <div>
        <p>{bodyContent}</p>
      </div>
    </WidgetContainer>
  );
};
