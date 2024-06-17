function formatNumber(number) {
    if (number < 1000) {
      return number;
    } else if (number < 1000000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return (number / 1000000).toFixed(1) + "M";
    }
  }
  
  // Utilisation dans un composant Next.js
  function PriceFormat ({myNumber=0}){
    const formattedNumber = formatNumber(myNumber);
  
    return (
      <span>{formattedNumber} <span className="font-bold">BIF</span> </span>
    );
  };
  export default PriceFormat