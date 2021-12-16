export default function address(req, res) {
  if (req.method === "POST") {
    if (req.body.token && req.body.search_address) {
      fetch("https://devcore02.cimet.io/v1/search-address", {
        method: "POST",
        headers: {
          "api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          "auth-token": req.body.token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          search_address: req.body.search_address,
        }),
      })
        .then((response) => {
          if (response.status == 400) {
            return res.status(400).json({
              status: 0,
              message: "Missing Header API-Key or Token",
            });
          }
          return response.json();
        })
        .then((data) => {
          res.status(200).json(data);
        });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
