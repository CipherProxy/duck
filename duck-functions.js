
import interfaceFactory from '@psychedelic/dab-js/dist/idls/dip_721_v2.did.js';

export const plugLogin = async () => {
    const canisterId = "q47yz-iyaaa-aaaam-qambq-cai";
    // const canisterId = "6hgw2-nyaaa-aaaai-abkqq-cai";
    const whitelist = [canisterId];
    const standard = "DIP721v2";
    console.log('logging in...');
    await window.ic.plug.requestConnect({whitelist});
    console.log("Plug has logged in, grabbing actor...");
    const principal = await window.ic.plug.agent.getPrincipal();
    console.log("Your principal is " + principal);;
    const connected = await window.ic.plug.isConnected();
    if (connected) {
      console.log("You have been logged in with plug.");
    } else {
      console.log("Please try again.");
    }
    const actor = await window.ic.plug.createActor({canisterId, interfaceFactory});
    console.log("Actor created successfully, getting token supply...");
    const indexResult = await actor.totalSupply();
    const stringLength = indexResult.toString().length;
    const tokenIndexRaw = Number(await indexResult.toString().slice(0,stringLength));
    const tokenIndex = tokenIndexRaw + 1;
    console.log("Next token in line is " + tokenIndex);
    console.log("Minting nft...");
    const properties = [
      [
        "location",
        {
          "TextContent": "https://qgh4x-kyaaa-aaaaj-afk5q-cai.raw.ic0.app/playground/preview.jpg"
        }
      ],
      [
        "glb",
        {
          "TextContent": "https://qgh4x-kyaaa-aaaaj-afk5q-cai.raw.ic0.app/playground/Duck.glb"
        }
      ],
      [
        "json",
        {
          "TextContent": "{\"Achievement Unlocked\":\"Minted!\"}"
        }
      ]
    ];
    const mintResult = await actor.mint(principal, tokenIndex, properties);
    const formattedResults = Object.keys(mintResult);
    console.log(formattedResults);
    if (formattedResults.includes("Ok")) {
      alert("NFT Minted Successfully");
    } else {
      alert("NFT Minting Failed: \nSee your console log (F12) for details.");
    }
  }