import image from "./assets/image.png"
import axios from "axios"

function Home() {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:3001/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:3001/api/payment", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Mainak",
            description: "RazorPay Integration",
            order_id: order.id,
            callback_url: "http://localhost:3001/api/paymentverification",
            // prefill: {
            //     name: "",
            //     email: "",
            //     contact: ""
            // },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

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
        <div className="submit w-full">
                  <button className=" w-full bg-black text-white text-center p-2 mt-2 mb-3 rounded-b-xl rounded-bl-xl" style={{ fontFamily: "Montserrat" }}
                      onClick={() => {
                      checkoutHandler(1058.65)
                  }}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
