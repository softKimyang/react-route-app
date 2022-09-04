import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice, getInvoicesCount } from '../data';

export default function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    let count = getInvoicesCount();
    function navigateAfterDelete(){
        console.log('count ' , count);
        if(count === 0){
            navigate("/Invoices");
        }else{
            navigate("/Invoices" + location.search);     
        }
    }
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
            <button 
                onClick={ () =>{
                    deleteInvoice(invoice.number);
                    navigateAfterDelete();
                    //navigate("/Invoices" + location.search);
                }}
            >
                Delete
            </button>
        </p>
      </main>
    );
  }
