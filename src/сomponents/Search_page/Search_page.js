import React from "react";
import Search_main from "./Search_main/Search_main";
import {Route} from "react-router-dom";


const Search_page = () => {
    return (
        <div>
            <Search_main/>
        </div>
    )
};

export default Search_page;




// ============================================================================



//
// const Icon = ({name}) => {
//     return <span/>
// }
//
// const Tabs = () => {
//     return <Tabs>
//         <TabList>
//             <Tab>
//                 <div>
//                     <Icon name="geo" className="className"/>
//                     Search
//                 </div>
//             </Tab>
//             <Tab>Title 2</Tab>
//             <Tab>Title 2</Tab>
//         </TabList>
//
//         <TabPanel>
//             <Map/>
//         </TabPanel>
//         <TabPanel>
//             <h2>Any content 2</h2>
//         </TabPanel>
//     </Tabs>
// }
