export const getAllSubscriptions = (token) => fetch("/bpm/admin/subscriptions/all",
    {
        method: "GET",
        headers: {
            Authorization: `${token}`,
        },
    })
    .then(response => response.json())
    .then(subscriptions => subscriptions || []);
