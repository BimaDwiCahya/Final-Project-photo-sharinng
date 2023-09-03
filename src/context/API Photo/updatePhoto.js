import axios from "axios";

export const updatePhoto = async(
    namePhoto,
    usernamePhoto,
    emailPhoto,
    profilePictureUrlPhoto,
    phoneNumberPhoto,
    bioPhoto,
    websitePhoto,
    photoId,
)=> {
    try{
        const dataBody = {
            name: namePhoto,
            username: usernamePhoto,
            email: emailPhoto,
            profilePictureUrl: profilePictureUrlPhoto,
            phoneNumber: phoneNumberPhoto,
            bio: bioPhoto,
            website: websitePhoto
        };
        const response = await axios.post(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/${photoId}`,
        dataBody,
        {
            headers: {
                apiKey: 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWEuZHdpLmNhaHlhQGdtYWlsLmNvbSIsInVzZXJJZCI6Ijg1NDQ1ODQwLTNiODUtNDg5ZS1iNzQ1LWI4MWRmZjA3YzYzMCIsInJvbGUiOiJnZW5lcmFsIiwiaWF0IjoxNjkyMzQ5MTgzfQ.MosgBeAXROutvioEt02owAEMOOJa4apSbyK9KggXc0w`,
                "Content-Type": "application/json",
            },
        }
        );

        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
};