import Header from "./header/header.components";
import Hero from "./hero/hero.components";
import PageContainer from "../../reusables/pageContainer.component";

const HomePage = () => {


    return (
        <>
        <div>
            <PageContainer>
                    <Header />
                    <Hero />
            </PageContainer>
        </div>
        </>
    )

}



export default HomePage;