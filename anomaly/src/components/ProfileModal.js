import React, { useState } from 'react'

const ProfileModal = ({ setShowProfileModal }) => {

    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const localUser = localStorage.getItem("username");
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];

        const previewUrl = URL.createObjectURL(file);
        setFile(file);
        var fileName = event.target.files[0].name;
        console.log("image" + fileName)
        setImagePreview(previewUrl);
    }

    async function onSubmit(e) {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("imageFile",file)
        try {
            const url = "http://localhost:5000/user/userImage/" + localUser;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    // "content-type": "multipart/form-data",
                },
                body: formData,
            });
            if (!response.ok) {
                // const err = await response.json();
                alert("Update failed");
                // console.log("Looks like there was a problem.", err);
                return;
            } else {
                const data = await response.json();
                localStorage.setItem('userImage', data.userImage);               
                // setOpen(false);
                setShowProfileModal(false)
                window.location.reload()
                // getGroups();
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-center w-full">
                                Update Profile Picture
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className='w-full flex justify-center'>
                                <img
                                    className='w-40 h-40 object-cover rounded-full'
                                    src={imagePreview}
                                    alt='user image'
                                />
                            </div>
                            <form onSubmit={onSubmit} className='mx-10 flex flex-col justify-center'>
                                <div className='flex flex-col justify-center'>
                                    <div className='flex flex-row justify-evenly m-2'>
                                        <label className='mx-4 font-Teko text-2xl'>Profile Image</label>
                                        <input type='file' name='imageFile'
                                            onChange={handleFileInputChange}
                                        ></input>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-end'>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowProfileModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        {/*footer*/}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ProfileModal