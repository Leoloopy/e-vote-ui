import "./pageContainer.style.scss";


type PageContainerProps = {
    children: React.ReactNode;
}


const PageContainer = ({children}:PageContainerProps) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}


export default PageContainer;