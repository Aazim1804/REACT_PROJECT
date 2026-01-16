import React, { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const OrderSuccess = () => {
  const { state } = useLocation();
  const invoiceRef = useRef();
  
  // ✅ Get the dynamic data
  const cart = state?.cart || [];
  const total = state?.total || 0;
  
  const orderId = Math.floor(Math.random() * 900000) + 100000;
  const date = new Date().toLocaleString('en-IN', { 
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' 
  });

  const downloadInvoice = async () => {
    const element = invoiceRef.current;
    // High scale ensures the text isn't blurry in the PDF
    const canvas = await html2canvas(element, { scale: 3, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`RestoCabana_Receipt_${orderId}.pdf`);
  };

  return (
    <div style={styles.container}>
      {/* SUCCESS MESSAGE */}
      <div style={styles.topSection}>
        <div style={styles.circle}><div style={styles.checkmark}>L</div></div>
        <h1 style={styles.title}>Order Confirmed</h1>
        <p style={styles.subtitle}>An exquisite selection. Your order is being prepared.</p>
      </div>

      {/* BILL PREVIEW BOX */}
      <div style={styles.previewContainer}>
        <h3 style={styles.previewTitle}>Digital Receipt Preview</h3>
        <div style={styles.scrollBox}>
           <div ref={invoiceRef} style={styles.billTemplate}>
              <div style={styles.billHeader}>
                <h2 style={styles.billLogo}>RESTOCABANA</h2>
                <p style={styles.billTagline}>EST. 2024 • FINE DINING EXPERIENCE</p>
              </div>
              
              <div style={styles.billRow}>
                <span>Order No: <strong>#{orderId}</strong></span>
                <span>{date}</span>
              </div>

              <div style={styles.divider}></div>

              {/* ITEM TABLE */}
              <div style={styles.tableHeader}>
                <span>Culinary Selection</span>
                <span>Amount</span>
              </div>

              {cart.map((item, index) => (
                <div key={index} style={styles.itemRow}>
                  <span>{item.name} {item.quantity > 1 ? `x${item.quantity}` : ""}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}

              <div style={styles.divider}></div>

              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Taxes & Service Charge</span>
                <span>Inclusive</span>
              </div>

              <div style={styles.totalRow}>
                <span>GRAND TOTAL</span>
                <span style={styles.goldText}>₹{total}</span>
              </div>

              <div style={styles.billFooter}>
                <p>Thank you for choosing RestoCabana.</p>
                <p style={{fontSize: '9px', marginTop: '15px', color: '#999'}}>
                  This is a computer-generated invoice.
                </p>
              </div>
           </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div style={styles.btnGroup}>
        <button onClick={downloadInvoice} style={styles.downloadBtn}>
          Download Bill
        </button>
        <Link to="/" style={styles.homeLink}>Back to Home</Link>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

const styles = {
  container: { minHeight: "100vh", background: "#050505", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "serif" },
  topSection: { textAlign: "center", marginBottom: "30px", animation: "fadeIn 0.8s ease" },
  circle: { width: "60px", height: "60px", borderRadius: "50%", border: "2px solid #d4af37", margin: "0 auto 15px", display: "flex", alignItems: "center", justifyContent: "center" },
  checkmark: { color: "#d4af37", fontSize: "24px", transform: "rotate(45deg) scaleX(-1)", fontWeight: "bold" },
  title: { color: "#d4af37", fontSize: "1.8rem", letterSpacing: "3px", textTransform: "uppercase", margin: 0 },
  subtitle: { color: "#888", fontSize: "0.9rem", marginTop: "5px" },
  
  previewContainer: { width: "100%", maxWidth: "450px", background: "#111", padding: "20px", borderRadius: "12px", border: "1px solid #222", animation: "fadeIn 1s ease" },
  previewTitle: { fontSize: "0.7rem", color: "#d4af37", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px", textAlign: "center" },
  scrollBox: { maxHeight: "400px", overflowY: "auto", borderRadius: "4px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" },

  billTemplate: { background: "#fff", color: "#000", padding: "40px", width: "100%", boxSizing: "border-box", fontFamily: "'Times New Roman', Times, serif" },
  billHeader: { textAlign: "center", marginBottom: "30px" },
  billLogo: { margin: 0, letterSpacing: "6px", fontSize: "24px", fontWeight: "bold" },
  billTagline: { fontSize: "10px", color: "#555", margin: "5px 0 0" },
  billRow: { display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#333", marginTop: "20px" },
  divider: { height: "1px", background: "#000", margin: "15px 0", opacity: 0.1 },
  tableHeader: { display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", color: "#999", marginBottom: "10px" },
  itemRow: { display: "flex", justifyContent: "space-between", fontSize: "14px", margin: "10px 0" },
  summaryRow: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#666", margin: "2px 0" },
  totalRow: { display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "bold", marginTop: "20px", borderTop: "2px solid #000", paddingTop: "15px" },
  goldText: { color: "#b38b00" },
  billFooter: { textAlign: "center", marginTop: "40px", fontSize: "11px", color: "#777", fontStyle: "italic" },

  btnGroup: { marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px", width: "100%", maxWidth: "450px" },
  downloadBtn: { background: "#d4af37", border: "none", padding: "16px", color: "#000", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer" },
  homeLink: { textAlign: "center", color: "#d4af37", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "1px" }
};

export default OrderSuccess;