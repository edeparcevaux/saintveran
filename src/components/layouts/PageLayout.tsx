import {FunctionComponent, ReactElement} from "react";


interface PageLayoutProps {
    children: string | ReactElement;
};

const PageLayout: FunctionComponent<PageLayoutProps> = ({children}) => {



    return <div className="pageContainer">{children}</div>;
};

export default PageLayout;