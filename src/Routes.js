import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetOwnerCreate, PetOwnerEdit, PetOwnerView, 
PetOwners, 
PetServiceCreate, PetServiceEdit, PetServiceView, 
PetServiceTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />
                                            <Route path="PetOwners/view/:id" element={<PetOwnerView {...props} title={'View PetOwner'} />} />
                        <Route path="PetOwners/edit/:id" element={<PetOwnerEdit {...props} title={'Edit PetOwner'} />} />
                        <Route path="PetOwners/create" element={<PetOwnerCreate {...props} title={'Create PetOwner'} />} />
                                                <Route path="/" element={<PetOwners {...props} title={'Customers'} nolistbar={true} />} />
                                                                                            <Route path="PetServices/view/:id" element={<PetServiceView {...props} title={'View PetService'} />} />
                        <Route path="PetServices/edit/:id" element={<PetServiceEdit {...props} title={'Edit PetService'} />} />
                        <Route path="PetServices/create" element={<PetServiceCreate {...props} title={'Create PetService'} />} />

                <Route path="/customers" element={<PetOwners {...props} title={'Customers'} />} />
                <Route path="/services" element={<PetServiceTiles {...props} title={'services'} />} />
        </Routes>
    )

};

export default Component;