import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
      // ==== navigation =====
  const navigate = useNavigate();
      // ===== get localStorage date =====
  const getLogin = window.localStorage.getItem("login");
  const getParol = window.localStorage.getItem("password");

// ===== function when from submit ====
  const handleForm = (e) => {
    e.preventDefault();
  
    let login = e.target[0].value;
    let parol = e.target[1].value;
  
    if(login === '' || parol === ""){
      alert("maydomlarni toldirmadingiz");
    }else if(login === getLogin && parol===getParol){
      navigate("/profil");
      window.localStorage.setItem("ruxsat", "true");
    }else{
      alert("siz royxatdan otmagansiz");
    }
  }
  return (
    <div>
        <form onSubmit={handleForm} className='w-[500px] relative p-12 h-80 bg-white rounded-lg shadow-xl mx-auto'>
            <div className='flex flex-col mb-4'>
                <label htmlFor="ism" className='capitalize text-xl mb-2'>Login</label>
                <input type="text" className='border py-2 px-3' placeholder='Name' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor="parol" className='capitalize text-xl mb-2'>Passwors</label>
                <input type="password" className='border py-2 px-3' placeholder='password' />
            </div>

            <button className='bg-[#FF5C38] py-2 px-5 text-white rounded'>
                Yuborish
            </button>
        </form>
    </div>
  )
}

export default Login