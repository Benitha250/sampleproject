import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CheckOutForm, ContactUsContainer, CreateContainer, FooterContainer, Header, LoginForm, MainContainer, MenuContainer, RegisterForm } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllGasItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
    const [{gasItems},dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllGasItems().then(data => {
            dispatch({
                type : actionType.SET_GAS_ITEMS,
                gasItems : data,
            });
        });
    };

    useEffect(() => 
    {fetchData();}, []);

    return (
        <AnimatePresence>
        <div className="w-screen h-auto flex flex-col">
                <Header />

                <main className="mt-24 p-8 w-full">
                    <Routes>
                        <Route path="/*" element= {<MainContainer/>}/>
                        <Route path="/createItem" element= {<CreateContainer/>}/>
                        <Route path="/order" element= {<MenuContainer/>}/>
                        <Route path="/contact" element= {<ContactUsContainer/>}/>
                        <Route path="/checkOutForm" element= {<CheckOutForm/>}/>
                        <Route path="/logInForm" element= {<LoginForm/>}/>
                        <Route path="/registerForm" element= {<RegisterForm/>}/>
                        
                    </Routes>
                </main>

                <FooterContainer />
            </div>
        </AnimatePresence>
    );
};

export default App;