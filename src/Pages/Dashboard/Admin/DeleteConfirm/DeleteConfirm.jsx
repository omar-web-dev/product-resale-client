import React, { useEffect, useState } from 'react';


const DeleteConfirm = ({ hidden, close, deleteID}) => {
  const handelDelete = (deleteID) => {
    // delete IP

    close(true)
    console.log("deleted")
  }
  return (
    <div className={`${hidden ? "hidden" : "absolute"} z-50 bg-red-300 p-20 top-1/2 left-1/2 -translate-1/2`}>
      <h1>Are you sure?</h1>
      <p>You want to delete ?</p>
      <button onClick={()=>close(true)} className='px-3 bg-blue-500 text-white mx-3'>No</button>
      <button onClick={()=>handelDelete()} className='px-3 bg-red-500 text-white mx-3'>Yes </button>
    </div>
  );
};

export default DeleteConfirm;