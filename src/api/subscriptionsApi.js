export const getAllSubscriptions = () => fetch("/bpm/admin/subscriptions/all",
    {method: "GET"})
    .then(response => response.json())
    .then(subscriptions => subscriptions || []);
