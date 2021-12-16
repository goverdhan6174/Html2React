export default function address(req, res) {
  console.log(req.method);
  if (req.method === "GET") {
    fetch("https://devcore02.cimet.io/v1/generate-token", {
      method: "POST",
      headers: { "api-key": "4NKQ3-815C2-8T5Q2-16318-55301" },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        res.status(200).json(data);
      });
  } else {
    res.status(405).json({ status: 0, message: "Method not allowed" });
  }
}
