const form = document.getElementById("form");

const handleSubmit = event => {
  event.preventDefault();

  const loanAmount = document.getElementById("loanAmount").value; // 10000
  const interestRate = document.getElementById("interestRate").value; // 10
  const loanTerm = document.getElementById("loanTerm").value;
  // 5

  const months = loanTerm * 12;
  const rate = interestRate / 100 / 12;
  const monthlyRate = Math.pow(1 + rate, months);

  const monthlyPayment = (loanAmount * rate * monthlyRate) / (monthlyRate - 1); // 212.47

  const wrapper = document.getElementById("wrapper");
  let monthlyPaymentText = document.querySelector("#wrapper p");

  console.log(monthlyPaymentText);

  if (!monthlyPaymentText) {
    monthlyPaymentText = document.createElement("p");
    wrapper.appendChild(monthlyPaymentText);
  }

  monthlyPaymentText.innerHTML = `<strong> Monthly Payment: $${monthlyPayment.toFixed(
    2
  )}</strong>`;
  monthlyPaymentText.className = "mt-3 align-self-start container w-50";
};

form.addEventListener("submit", handleSubmit);
