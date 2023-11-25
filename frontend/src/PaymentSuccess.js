import React from 'react'
import { useSearchParams } from "react-router-dom"
import image from "./assets/image.png"

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0]

  const referenceNum = seachQuery.get("reference")//not used due to hard coded UI

  return (
    <div className="main  flex flex-col  w-screen relative min-h-screen">
    <div className="img">
      <img src={image} alt="" style={{height:"17vh",width:"100vw"}} />
    </div>
    <div className="absolute bg-white flex flex-col justify-evenly rounded-xl items-center" style={{top:"10%",height:"20vh",width:"85vw",left:"7.5vw",boxShadow: "0 0 10px"}}>
      <div style={{ fontWeight:"700", fontSize: "20px" }}>TSX PIZZERIAS</div>
      <div className="buttons flex rounded-xl" style={{width:"85%",border:"2px solid black"}}>
        <div className="delivery rounded-xl text-center bg-black text-white" style={{width:"50%",fontSize:"15px"}}>
          DELIVERY
        </div>
        <div className="pick  text-center rounded-r-xl bg-gray-200" style={{width:"50%",fontSize:"15px"}}>
         PICK UP
        </div>
      </div>
      <div className="three flex w-full justify-evenly font-semibold" >
        <span>25 mins</span>
        <span>₹20</span>
        <span>Discounts</span>
      </div>
      <div className="menu w-full text-center font-semibold">
        Menu Hours:10:00AM to 11:00PM
      </div>
    </div>
    <div className="order" style={{marginTop:"14vh"}}>
      <div className="top-line flex justify-between items-center" style={{padding:"2vh 0 1vh 0"}}>
        <span style={{marginLeft:"10%",fontWeight:"bold",fontSize:"2.5vh",color:"#444444"}}>Your Order</span>
        <span style={{marginRight:"7%",fontWeight:"bold",fontSize:"2.1vh",color:"#ea3b53"}}>Add items +</span>
      </div>
      <div className="items flex flex-col items-center w-full" style={{fontFamily:"Mulish,sans-serif"}}>
        <div className="item1 flex gap-3  " style={{ width: "80%" ,padding:"2vh 0",borderBottom:"2px solid #f7f7f7",color:"#727272"}}>
          <div className="icon rounded h-fit w-fit p-2 pt-0 pb-0 text-white" style={{ backgroundColor: "#ea3b53" }}>2</div>
          <div className="A w-full">
          <p className="font-semibold flex w-full text-base justify-between">
              <span> Margarita C</span>
              <span>₹412.00</span>
            </p>
            <p className="text-sm">crab & cucumber</p>
          </div>
        </div>
        <div className="item2 flex gap-3  " style={{ width: "80%" ,padding:"2vh 0",borderBottom:"2px solid #f7f7f7",color:"#727272"}}>
          <div className="icon rounded h-fit w-fit p-2 pt-0 pb-0 text-white" style={{ backgroundColor: "#ea3b53" }}>1</div>
          <div className="B w-full">
          <p className="font-semibold flex w-full text-base justify-between">
              <span> Margarita B</span>
              <span>₹112.00</span>
            </p>
            <p className="text-sm">crab & cucumber</p>
          </div>
        </div>
        <div className="item3 flex gap-3  " style={{ width: "80%" ,padding:"2vh 0",borderBottom:"2px solid #f7f7f7",color:"#727272"}}>
          <div className="icon rounded h-fit w-fit p-2 pt-0 pb-0 text-white" style={{ backgroundColor: "#ea3b53" }}>3</div>
          <div className="C w-full">
            <p className="font-semibold flex w-full text-base justify-between">
              <span> Margarita C</span>
              <span>₹1236.00</span>
            </p>
            <p className="text-sm">smoked salmon over rice with extra sauce to check if this line works</p>
          </div>
        </div>
      </div>
      <div className="summary-line flex justify-between items-center" style={{padding:"2vh 0 1vh 0"}}>
        <span style={{marginLeft:"10%",fontWeight:"bold",fontSize:"2.5vh",color:"#444444",borderBottom:"2px solid red"}}>Summary</span>
      </div>
      <div className="calc w-full flex flex-col justify-center items-center font-semibold text-base" style={{color:"#727272",fontFamily:"Nunito"}}>
        <div className="flex justify-between" style={{width:"80%",padding:"1vh 0",borderBottom:"2px solid #f7f7f7"}}>
          <span>Subtotal</span>
          <span>₹1760.00</span>
        </div>
        <div className="flex justify-between" style={{width:"80%",padding:"1vh 0",borderBottom:"2px solid #f7f7f7"}}>
          <span>Discount</span>
          <span style={{color:"#83a8e1"}}>-₹759.50</span>
        </div>
        <div className="flex justify-between" style={{width:"80%",padding:"1vh 0",borderBottom:"2px solid #f7f7f7"}}>
          <span>Delivery Fee</span>
          <span>₹12.00</span>
        </div>
        <div className="flex justify-between" style={{width:"80%",padding:"1vh 0",borderBottom:"2px solid #f7f7f7"}}>
          <span>Taxes</span>
          <span>₹46.15</span>
        </div>
      </div>
      <div className="total font-bold text-lg flex justify-between" style={{ width: "80%", marginLeft: "10%",padding:"1vh 0" }}>
        <span>
          Total
        </span>
        <span>
        ₹1058.65
        </span>
      </div>
          </div>
      <div className="successful absolute flex flex-col justify-evenly items-center" style={{width:"85%",height:"22%",top:"37%",left:"7.5%",backgroundColor:"#f2f2f2",boxShadow: "2px 3px 5px 0px rgba(0,0,0,1)",borderRadius:"4%"}}>
        <div style={{width:"85%",fontWeight:"500"}}>
        <p>Order has been placed successfully.</p>
        <p>Confirmation message sent!</p>
        </div>
        <p style={{width:"85%"}}>
          <span className="font-bold">Order Id:</span>
          <span className="font-semibold"> &nbsp; 3267</span>
        </p>
        <p style={{ width: "85%" }}>
          <span className="font-bold">Total:</span>
          <span className="font-semibold"> &nbsp; ₹ 1058.65</span>
        </p>
        <div style={{width:"85%",display:"flex",justifyContent:"end"}}>
          <button style={{ backgroundColor: "#c4c4c4", padding: "5px 25px",fontSize:"16px",border:"none" ,fontWeight:"600",borderRadius:"4%",boxShadow: "2px 3px 5px 0px rgba(0,0,0,1)" }}>
            Back
          </button>
        </div>
     </div>
  </div>
  )
}

export default PaymentSuccess