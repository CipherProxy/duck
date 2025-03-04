var dip_721_v2_did = {};
Object.defineProperty(dip_721_v2_did, "__esModule", { value: true });
dip_721_v2_did.init = void 0;
var _default = dip_721_v2_did.default = ({ IDL }) => {
  const Vec = IDL.Rec();
  IDL.Record({
    "logo": IDL.Opt(IDL.Text),
    "name": IDL.Opt(IDL.Text),
    "custodians": IDL.Opt(IDL.Vec(IDL.Principal)),
    "symbol": IDL.Opt(IDL.Text)
  });
  const NftError = IDL.Variant({
    "UnauthorizedOperator": IDL.Null,
    "SelfTransfer": IDL.Null,
    "TokenNotFound": IDL.Null,
    "UnauthorizedOwner": IDL.Null,
    "TxNotFound": IDL.Null,
    "SelfApprove": IDL.Null,
    "OperatorNotFound": IDL.Null,
    "ExistedNFT": IDL.Null,
    "OwnerNotFound": IDL.Null,
    "Other": IDL.Text
  });
  const Result = IDL.Variant({ "Ok": IDL.Nat, "Err": NftError });
  const Result_1 = IDL.Variant({ "Ok": IDL.Bool, "Err": NftError });
  const ManualReply = IDL.Record({
    "logo": IDL.Opt(IDL.Text),
    "name": IDL.Opt(IDL.Text),
    "created_at": IDL.Nat64,
    "upgraded_at": IDL.Nat64,
    "custodians": IDL.Vec(IDL.Principal),
    "symbol": IDL.Opt(IDL.Text)
  });
  Vec.fill(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Variant({
    "Nat64Content": IDL.Nat64,
    "Nat32Content": IDL.Nat32,
    "BoolContent": IDL.Bool,
    "Nat8Content": IDL.Nat8,
    "Int64Content": IDL.Int64,
    "IntContent": IDL.Int,
    "NatContent": IDL.Nat,
    "Nat16Content": IDL.Nat16,
    "Int32Content": IDL.Int32,
    "Int8Content": IDL.Int8,
    "FloatContent": IDL.Float64,
    "Int16Content": IDL.Int16,
    "BlobContent": IDL.Vec(IDL.Nat8),
    "NestedContent": Vec,
    "Principal": IDL.Principal,
    "TextContent": IDL.Text
  }))));
  const GenericValue = IDL.Variant({
    "Nat64Content": IDL.Nat64,
    "Nat32Content": IDL.Nat32,
    "BoolContent": IDL.Bool,
    "Nat8Content": IDL.Nat8,
    "Int64Content": IDL.Int64,
    "IntContent": IDL.Int,
    "NatContent": IDL.Nat,
    "Nat16Content": IDL.Nat16,
    "Int32Content": IDL.Int32,
    "Int8Content": IDL.Int8,
    "FloatContent": IDL.Float64,
    "Int16Content": IDL.Int16,
    "BlobContent": IDL.Vec(IDL.Nat8),
    "NestedContent": Vec,
    "Principal": IDL.Principal,
    "TextContent": IDL.Text
  });
  const Result_2 = IDL.Variant({
    "Ok": IDL.Opt(IDL.Principal),
    "Err": NftError
  });
  const ManualReply_1 = IDL.Variant({
    "Ok": IDL.Vec(IDL.Nat),
    "Err": NftError
  });
  const TokenMetadata = IDL.Record({
    "transferred_at": IDL.Opt(IDL.Nat64),
    "transferred_by": IDL.Opt(IDL.Principal),
    "owner": IDL.Opt(IDL.Principal),
    "operator": IDL.Opt(IDL.Principal),
    "approved_at": IDL.Opt(IDL.Nat64),
    "approved_by": IDL.Opt(IDL.Principal),
    "properties": IDL.Vec(IDL.Tuple(IDL.Text, GenericValue)),
    "is_burned": IDL.Bool,
    "token_identifier": IDL.Nat,
    "burned_at": IDL.Opt(IDL.Nat64),
    "burned_by": IDL.Opt(IDL.Principal),
    "minted_at": IDL.Nat64,
    "minted_by": IDL.Principal
  });
  const ManualReply_2 = IDL.Variant({
    "Ok": IDL.Vec(TokenMetadata),
    "Err": NftError
  });
  const Stats = IDL.Record({
    "cycles": IDL.Nat,
    "total_transactions": IDL.Nat,
    "total_unique_holders": IDL.Nat,
    "total_supply": IDL.Nat
  });
  const SupportedInterface = IDL.Variant({
    "Burn": IDL.Null,
    "Mint": IDL.Null,
    "Approval": IDL.Null,
    "TransactionHistory": IDL.Null
  });
  const ManualReply_3 = IDL.Variant({ "Ok": TokenMetadata, "Err": NftError });
  const TxEvent = IDL.Record({
    "time": IDL.Nat64,
    "operation": IDL.Text,
    "details": IDL.Vec(IDL.Tuple(IDL.Text, GenericValue)),
    "caller": IDL.Principal
  });
  const ManualReply_4 = IDL.Variant({ "Ok": TxEvent, "Err": NftError });
  return IDL.Service({
    "approve": IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    "balanceOf": IDL.Func([IDL.Principal], [Result], ["query"]),
    "burn": IDL.Func([IDL.Nat], [Result], []),
    "custodians": IDL.Func([], [IDL.Vec(IDL.Principal)], ["query"]),
    "cycles": IDL.Func([], [IDL.Nat], ["query"]),
    "isApprovedForAll": IDL.Func([IDL.Principal, IDL.Principal], [Result_1], ["query"]),
    "logo": IDL.Func([], [IDL.Opt(IDL.Text)], ["query"]),
    "metadata": IDL.Func([], [ManualReply], ["query"]),
    "mint": IDL.Func([IDL.Principal, IDL.Nat, IDL.Vec(IDL.Tuple(IDL.Text, GenericValue))], [Result], []),
    "name": IDL.Func([], [IDL.Opt(IDL.Text)], ["query"]),
    "operatorOf": IDL.Func([IDL.Nat], [Result_2], ["query"]),
    "operatorTokenIdentifiers": IDL.Func([IDL.Principal], [ManualReply_1], ["query"]),
    "operatorTokenMetadata": IDL.Func([IDL.Principal], [ManualReply_2], ["query"]),
    "ownerOf": IDL.Func([IDL.Nat], [Result_2], ["query"]),
    "ownerTokenIdentifiers": IDL.Func([IDL.Principal], [ManualReply_1], ["query"]),
    "ownerTokenMetadata": IDL.Func([IDL.Principal], [ManualReply_2], ["query"]),
    "setApprovalForAll": IDL.Func([IDL.Principal, IDL.Bool], [Result], []),
    "setCustodians": IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    "setLogo": IDL.Func([IDL.Text], [], []),
    "setName": IDL.Func([IDL.Text], [], []),
    "setSymbol": IDL.Func([IDL.Text], [], []),
    "stats": IDL.Func([], [Stats], ["query"]),
    "supportedInterfaces": IDL.Func([], [IDL.Vec(SupportedInterface)], ["query"]),
    "symbol": IDL.Func([], [IDL.Opt(IDL.Text)], ["query"]),
    "tokenMetadata": IDL.Func([IDL.Nat], [ManualReply_3], ["query"]),
    "totalSupply": IDL.Func([], [IDL.Nat], ["query"]),
    "totalTransactions": IDL.Func([], [IDL.Nat], ["query"]),
    "totalUniqueHolders": IDL.Func([], [IDL.Nat], ["query"]),
    "transaction": IDL.Func([IDL.Nat], [ManualReply_4], ["query"]),
    "transfer": IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    "transferFrom": IDL.Func([IDL.Principal, IDL.Principal, IDL.Nat], [Result], [])
  });
};
const init = ({ IDL }) => {
  const InitArgs = IDL.Record({
    "logo": IDL.Opt(IDL.Text),
    "name": IDL.Opt(IDL.Text),
    "custodians": IDL.Opt(IDL.Vec(IDL.Principal)),
    "symbol": IDL.Opt(IDL.Text)
  });
  return [IDL.Opt(InitArgs)];
};
dip_721_v2_did.init = init;
const plugLogin = async () => {
  const canisterId = "q47yz-iyaaa-aaaam-qambq-cai";
  const whitelist = [canisterId];
  console.log("logging in...");
  await window.ic.plug.requestConnect({ whitelist });
  console.log("Plug has logged in, grabbing actor...");
  const principal = await window.ic.plug.agent.getPrincipal();
  console.log("Your principal is " + principal);
  const connected = await window.ic.plug.isConnected();
  if (connected) {
    console.log("You have been logged in with plug.");
  } else {
    console.log("Please try again.");
  }
  const actor = await window.ic.plug.createActor({ canisterId, interfaceFactory: _default });
  console.log("Actor created successfully, getting token supply...");
  const indexResult = await actor.totalSupply();
  const stringLength = indexResult.toString().length;
  const tokenIndexRaw = Number(await indexResult.toString().slice(0, stringLength));
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
        "TextContent": '{"Achievement Unlocked":"Minted!"}'
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
};
export { plugLogin };
