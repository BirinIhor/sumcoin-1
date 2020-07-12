/* @flow */
import TrezorConnect from '../../index';

export const stellarGetAddress = async () => {
    // regular
    const singleAddress = await TrezorConnect.stellarGetAddress({ path: 'm/44' });
    (singleAddress.success: boolean);
    if (singleAddress.success) {
        const { payload } = singleAddress;
        (payload.address: string);
        (payload.path: number[]);
        (payload.serializedPath: string);
        // $FlowIssue: payload is Address
        payload.forEach(item => {
            (item.address: string);
        });
    }

    // bundle
    const bundleAddress = await TrezorConnect.stellarGetAddress({ bundle: [{ path: 'm/44' }] });
    (bundleAddress.success: boolean);
    if (bundleAddress.success) {
        bundleAddress.payload.forEach(item => {
            (item.address: string);
            (item.path: number[]);
            (item.serializedPath: string);
        });
        // $FlowIssue: payload is Address[]
        (bundleAddress.payload.address: string);
    } else {
        (bundleAddress.payload.error: string);
    }

    // with all possible params
    TrezorConnect.stellarGetAddress({
        device: {
            path: '1',
            instance: 1,
            state: 'state@device-id:1',
        },
        useEmptyPassphrase: true,
        allowSeedlessDevice: false,
        keepSession: false,
        skipFinalReload: false,
        path: 'm/44',
        address: 'a',
        showOnTrezor: true,
    });

    // with invalid params
    // $FlowIssue
    TrezorConnect.stellarGetAddress();
    // $FlowIssue
    TrezorConnect.stellarGetAddress({ coin: 'btc' });
    // $FlowIssue
    TrezorConnect.stellarGetAddress({ path: 1 });
    // $FlowIssue
    TrezorConnect.stellarGetAddress({ bundle: 1 });
};

export const stellarSignTransaction = async () => {
    const sign = await TrezorConnect.stellarSignTransaction({
        path: 'm/44',
        networkPassphrase: 'Test SDF Network ; September 2015',
        transaction: {
            source: 'GAK5MSF74TJW6GLM7NLTL76YZJKM2S4CGP3UH4REJHPHZ4YBZW2GSBPW',
            fee: 100,
            sequence: '4294967296',
            memo: {
                type: 0,
            },
            operations: [
                {
                    type: 'createAccount',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    startingBalance: '1000333000',
                },
                {
                    type: 'accountMerge',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                },
                {
                    type: 'payment',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    asset: {
                        type: 0,
                        code: 'XLM',
                    },
                    amount: '500111000',
                },
                {
                    type: 'payment',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    amount: '500111000',
                    asset: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                },
                {
                    type: 'payment',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    amount: '500111000',
                    asset: {
                        type: 2,
                        code: 'ABCDEFGHIJKL',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                },
                {
                    type: 'bumpSequence',
                    bumpTo: '9223372036854775807',
                },
                {
                    type: 'setOptions',
                    inflationDest: 'GAFXTC5OV5XQD66T7WGOB2HUVUC3ZVJDJMBDPTVQYV3G3K7TUHC6CLBR',
                },
                {
                    type: 'setOptions',
                    signer: {
                        type: 0,
                        key: '72187adb879c414346d77c71af8cce7b6eaa57b528e999fd91feae6b6418628e',
                        weight: 2,
                    },
                },
                {
                    type: 'setOptions',
                    medThreshold: 0,
                },
                {
                    type: 'setOptions',
                    clearFlags: 0,
                    lowThreshold: 0,
                    highThreshold: 3,
                },
                {
                    type: 'setOptions',
                    setFlags: 3,
                    masterWeight: 4,
                    homeDomain: 'hello',
                },
                {
                    type: 'setOptions',
                },
                {
                    type: 'setOptions',
                    homeDomain: '',
                },
                {
                    type: 'manageData',
                    name: 'data',
                    value: '616263', // Buffer.from('abc').toString('hex')
                },
                {
                    type: 'manageData',
                    name: 'data',
                    value: undefined,
                },
                {
                    type: 'pathPayment',
                    sendAsset: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    sendMax: '500111000',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    destAsset: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    destAmount: '500111000',
                },
                {
                    type: 'pathPayment',
                    sendAsset: {
                        type: 2,
                        code: 'ABCDEFGHIJKL',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    sendMax: '500111000',
                    destination: 'GBOVKZBEM2YYLOCDCUXJ4IMRKHN4LCJAE7WEAEA2KF562XFAGDBOB64V',
                    destAsset: {
                        type: 2,
                        code: 'ABCDEFGHIJKL',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    destAmount: '500111000',
                    path: [
                        {
                            type: 1,
                            code: 'X',
                            issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                        },
                        {
                            type: 2,
                            code: 'ABCDEFGHIJKL',
                            issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                        },
                    ],
                },
                {
                    type: 'createPassiveOffer',
                    selling: {
                        type: 0,
                        code: 'XLM',
                    },
                    buying: {
                        type: 0,
                        code: 'XLM',
                    },
                    amount: '500111000',
                    price: {
                        n: 500111,
                        d: 10000,
                    },
                },
                {
                    type: 'createPassiveOffer',
                    selling: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    buying: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    amount: '500111000',
                    price: {
                        n: 500111,
                        d: 10000,
                    },
                },
                {
                    type: 'manageOffer',
                    selling: {
                        type: 0,
                        code: 'XLM',
                    },
                    buying: {
                        type: 0,
                        code: 'XLM',
                    },
                    amount: '500111000',
                    price: {
                        n: 500111,
                        d: 10000,
                    },
                    offerId: '101',
                },
                {
                    type: 'changeTrust',
                    line: {
                        type: 1,
                        code: 'X',
                        issuer: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    },
                    limit: '9223372036854775807',
                },
                {
                    type: 'allowTrust',
                    trustor: 'GAUYJFQCYIHFQNS7CI6BFWD2DSSFKDIQZUQ3BLQODDKE4PSW7VVBKENC',
                    assetType: 1,
                    assetCode: 'XLM',
                    authorize: true,
                },
            ],
        },
    });

    if (sign.success) {
        const { payload } = sign;
        (payload.publicKey: string);
        (payload.signature: string);
    }
};
