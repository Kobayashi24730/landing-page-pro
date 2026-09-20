import { useMutation } from "@tanstack/react-query";

export function useLeadEmail(email) {
  const payload = {
    service_id: "SEU_SERVICE_ID",       
    template_id: "SEU_TEMPLATE_ID",     
    user_id: "SUA_PUBLIC_KEY",          
    template_params: {
      user_email: email,      
      // atualização posivel para mandar um array com o campo message: (array).message,    
    },
  };
  const res = fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to send email");
  return res.json();
}

export function useSendEmail(options = {}){
  return useMutation({
    mutationFn: useLeadEmail,
    ...options //? permite passar callbacks
  })
}