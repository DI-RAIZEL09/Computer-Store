import lupa from '/public/assets/svg/lupaAdmin.svg'
import lupa1 from '/public/assets/svg/lupaAdminCopy.svg'
import admin from '/public/assets/svg/adminIcon.svg'
const HeaderAdmin = () => {
  return (
    <div className=" sticky top-0 w-full flex items-center justify-between border-b-[3px] border-[#5A5A5A]">
      <section className=' w-[60%] flex pt-5 pb-5 items-center gap-4'>
        <div className=' w-full h-[40px] flex items-center bg-[#E5E4E9] rounded'>
          <img src={lupa1} alt="" className=' h-[39px] p-3 bg-[#E5E4E9] rounded'/>
          <input type="text" placeholder="" className=' h-[35px] w-[90%] py-4 text-[#212936] rounded-tr rounded-br bg-[#E5E4E9] focus:outline-none'/>
        </div>
        <div className=' rounded-full bg-[#49DCFF]'><img src={lupa} alt="" className=' p-3 flex justify-center items-center'/></div>      
      </section>

      <section className=' flex items-center gap-4 cursor-pointer hover:-translate-x-1 hover:scale-105 hover:transition hover:duration-300 hover:ease-out'>
        <h3>Администратор</h3>
        <img src={admin} alt="" className=' h-[35px]'/>
      </section>
    </div>
  )
}

export default HeaderAdmin
