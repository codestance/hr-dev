interface MSGraphRequestOptions {
  method: "GET" | "POST";
  endpoint: string;
  payload?: unknown;
  token: string;
}

export const callMSGraph = async ({
  method,
  endpoint,
  payload,
  token,
}: MSGraphRequestOptions) => {
  try {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Prefer", "HonorNonIndexedQueriesWarningMayFailRandomly");
    const options: RequestInit = {
      method,
      headers,
    };
    console.log("payload", payload);

    if (payload) {
      options.body = JSON.stringify(payload);
    }
    console.log("options", options);
    console.log("request made to Graph API at: " + new Date().toString());

    const response: Response = await fetch(endpoint, options);
    console.log("ms graph response", response);

    try {
      // return JSON.parse(await response.text());
      const res = await response.json();
      console.log("res", res);
      return res;
    } catch (error) {
      console.log("response is not json", response.body);
    }

    if (response.status !== 200) {
      throw new Error(`Status: ${response.status}
      Message: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error while calling GraphApi endpoint ", endpoint, error);
    throw error;
  }
};

export const getFromMSGraph = (endpoint: string, token: string) =>
  callMSGraph({
    method: "GET",
    endpoint,
    token,
  });

export const postToMSGraph = (
  endpoint: string,
  token: string,
  payload: unknown
) =>
  callMSGraph({
    method: "POST",
    endpoint,
    payload,
    token,
  });
