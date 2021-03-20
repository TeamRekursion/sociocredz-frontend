

async function CreatePost(token, postTitle, postDescription, postPhotoUrl) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/post/create", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            postTitle,
            postDescription,
            postPhotoUrl
        })
    })

    let respJSON = await response.json()
    return respJSON
}

async function CreateCampaign(token, tagline, campaignDescription, moneyRequired, title) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/campaign/create", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tagline, campaignDescription, moneyRequired, title
        })
    })
    let respJSON = await response.json()
    return respJSON
}

async function FetchCampaigns(token) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/campaigns/fetch", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
    let respJSON = await response.json()
    return respJSON
}

async function FetchPosts(token) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/posts/fetch", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
    let respJSON = await response.json()
    return respJSON
}

async function FetchTotalDonation(token) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/donations/total", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
    let respJSON = await response.json()
    return respJSON
}

async function FetchDonations(token) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/donations", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
    let respJSON = await response.json()
    return respJSON
}

async function UploadVideoProof(token, donations, proofVideoUrl) {
    let response = await fetch("https://sociocredz.herokuapp.com/api/v1/ngo/post/create", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            donations, proofVideoUrl
        })
    })

    let respJSON = await response.json()
    return respJSON
}

module.exports = {
    CreatePost,
    CreateCampaign,
    FetchCampaigns,
    FetchPosts,
    FetchTotalDonation,
    FetchDonations,
    UploadVideoProof
}