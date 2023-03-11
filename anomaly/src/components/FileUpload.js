import React, { useState } from 'react'

const FileUpload = ({ setShowModal }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const localUser = localStorage.getItem("username");
    const userImage = localStorage.getItem("userImage");

    const [form, setForm] = useState({
        title: "",
        event: "",
    });

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];

        const previewUrl = URL.createObjectURL(file);
        setFile(file);
        var fileName = event.target.files[0].name;
        console.log("image" + fileName)
        setImagePreview(previewUrl);
    }
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("event", form.event);
        formData.append("username",localUser)
        formData.append("imageFile",file);
        formData.append("userImage",userImage)
        formData.append("likes", 1);
        try {
            const url = "http://localhost:5000/user/image/" + localUser;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    // "content-type": "multipart/form-data",
                },
                body: formData,
            });
            if (!response.ok) {
                const err = await response.json();
                alert("login failed");
                console.log("Looks like there was a problem.", err);
                return;
            } else {
                // const msg = await response.json();
                setShowModal(false);
                window.location.reload()
                // getGroups();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-center w-full">
                                    Upload File
                                </h3>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <form onSubmit={onSubmit} encType="multipart/form-data" className='mx-10 flex flex-col justify-center'>

                                    <div className='flex justify-center'>
                                        <img src={imagePreview} className=' object-cover' alt='Preview' />
                                    </div>
                                    <div className='flex flex-row justify-evenly m-2'>
                                        <label className='mx-4 font-Teko text-2xl'>File</label>
                                        <input type='file' name='imageFile' onChange={handleFileInputChange}></input>
                                    </div>
                                    <div className='flex flex-row justify-between  m-2'>
                                        <label className='mx-4 font-Teko text-2xl'>Title</label>
                                        <input type='text' name='title' onChange={(e) => updateForm({ title: e.target.value })} placeholder='title' className='mx-4 px-4'></input>
                                    </div>
                                    <div className='flex flex-row justify-between  m-2'>
                                        <label className='mx-4 font-Teko text-2xl'>Category</label>
                                        <input type='text' name='event' onChange={(e) => updateForm({ event: e.target.value })} placeholder='event' className='mx-4 px-4'></input>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        </div>
    )
}


export default FileUpload