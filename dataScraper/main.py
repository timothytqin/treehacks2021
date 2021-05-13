import csv
import json

import requests


# f = open("stocks.txt", "r")
# tickers = f.read().split('\n')

tickers = ['CDNS', 'ZM', 'NVDA', 'GOOG', 'AAL', 'AG', 'AMC', 'AMD', 'APHA', 'BB', 'BBBY', 'BYND', 'CTRM', 'EXPR', 'EZGO', 'GM', 'GME', 'GTE', 'HIMS', 'INO', 'IPOE', 'IPOF', 'JAGX', 'KOSS', 'LLIT', 'MRNA', 'MJ', 'MSOS', 'NAKD', 'NCTY', 'NOK', 'NVAX', 'OPEN', 'RKT', 'RLX', 'RYCEY', 'SBUX', 'SHLS', 'SIEB', 'SLV', 'SNDL', 'SOXL', 'SRNE', 'STPK', 'TGC', 'TIRX', 'TR', 'TRVG', 'WKHS', 'XM', 'ZOM']

for ticker in tickers: 
    # url = f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1=1581671286&period2=1613293686&interval=1d&events=history&includeAdjustedClose=true'
    # r = requests.get(url)

    # open(f'/home/davidyue/Documents/Hackathons/treehacks2021/client/src/dataScraper/data/csv/{ticker}.csv', 'wb').write(r.content)

    # csvfile = open(f'./data/csv/{ticker}.csv', 'r')
    # jsonfile = open(f'./data/json/{ticker}.json', 'w')

    # fieldnames = ("Date", "Open", "High", "Low", "Close", "Adj Close", "Volume")

    # reader = csv.DictReader(csvfile, fieldnames)

    # data = {}

    # for idx, row in enumerate(reader):
    #     if(idx == 0): 
    #         continue
    #     data[row['Date']] = {'closing_price' : row['Close']}

    #     # json.dump(row, jsonfile)
    #     # jsonfile.write('\n')
    #     # print(row)

    # parsed_data = {ticker : {'time_data' : data}}

    # json.dump(parsed_data, jsonfile)
    print(f'import {ticker} from \'./dataScraper/data/json/{ticker}.json\';')


# stocks : {
#     GME: 
#         time_data: {
#             [timestamp]:
#                 closing_price: price
#         }

# }


# // import CDNS from './dataScraper/data/json/CDNS.json';
# // import ZM from './dataScraper/data/json/ZM.json';
# // import NVDA from './dataScraper/data/json/NVDA.json';
# // import GOOG from './dataScraper/data/json/GOOG.json';
# // import AAL from './dataScraper/data/json/AAL.json';
# // import AG from './dataScraper/data/json/AG.json';
# // import AMC from './dataScraper/data/json/AMC.json';
# // import AMD from './dataScraper/data/json/AMD.json';
# // import APHA from './dataScraper/data/json/APHA.json';
# // import BB from './dataScraper/data/json/BB.json';
# // import BBBY from './dataScraper/data/json/BBBY.json';
# // import BYND from './dataScraper/data/json/BYND.json';
# // import CTRM from './dataScraper/data/json/CTRM.json';
# // import EXPR from './dataScraper/data/json/EXPR.json';
# // import EZGO from './dataScraper/data/json/EZGO.json';
# // import GM from './dataScraper/data/json/GM.json';
# // import GME from './dataScraper/data/json/GME.json';
# // import GTE from './dataScraper/data/json/GTE.json';
# // import HIMS from './dataScraper/data/json/HIMS.json';
# // import INO from './dataScraper/data/json/INO.json';
# // import IPOE from './dataScraper/data/json/IPOE.json';
# // import IPOF from './dataScraper/data/json/IPOF.json';
# // import JAGX from './dataScraper/data/json/JAGX.json';
# // import KOSS from './dataScraper/data/json/KOSS.json';
# // import LLIT from './dataScraper/data/json/LLIT.json';
# // import MRNA from './dataScraper/data/json/MRNA.json';
# // import MJ from './dataScraper/data/json/MJ.json';
# // import MSOS from './dataScraper/data/json/MSOS.json';
# // import NAKD from './dataScraper/data/json/NAKD.json';
# // import NCTY from './dataScraper/data/json/NCTY.json';
# // import NOK from './dataScraper/data/json/NOK.json';
# // import NVAX from './dataScraper/data/json/NVAX.json';
# // import OPEN from './dataScraper/data/json/OPEN.json';
# // import RKT from './dataScraper/data/json/RKT.json';
# // import RLX from './dataScraper/data/json/RLX.json';
# // import RYCEY from './dataScraper/data/json/RYCEY.json';
# // import SBUX from './dataScraper/data/json/SBUX.json';
# // import SHLS from './dataScraper/data/json/SHLS.json';
# // import SIEB from './dataScraper/data/json/SIEB.json';
# // import SLV from './dataScraper/data/json/SLV.json';
# // import SNDL from './dataScraper/data/json/SNDL.json';
# // import SOXL from './dataScraper/data/json/SOXL.json';
# // import SRNE from './dataScraper/data/json/SRNE.json';
# // import STPK from './dataScraper/data/json/STPK.json';
# // import TGC from './dataScraper/data/json/TGC.json';
# // import TIRX from './dataScraper/data/json/TIRX.json';
# // import TR from './dataScraper/data/json/TR.json';
# // import TRVG from './dataScraper/data/json/TRVG.json';
# // import WKHS from './dataScraper/data/json/WKHS.json';
# // import XM from './dataScraper/data/json/XM.json';
# // import ZOM from './dataScraper/data/json/ZOM.json';



#   // useEffect(() => {

#   //   const tickers = ['CDNS', 'ZM', 'NVDA', 'GOOG', 'AAL', 'AG', 'AMC', 'AMD', 'APHA', 'BB', 'BBBY', 'BYND', 'CTRM', 'EXPR', 'EZGO', 'GM', 'GME', 'GTE', 'HIMS', 'INO', 'IPOE', 'IPOF', 'JAGX', 'KOSS', 'LLIT', 'MRNA', 'MJ', 'MSOS', 'NAKD', 'NCTY', 'NOK', 'NVAX', 'OPEN', 'RKT', 'RLX', 'RYCEY', 'SBUX', 'SHLS', 'SIEB', 'SLV', 'SNDL', 'SOXL', 'SRNE', 'STPK', 'TGC', 'TIRX', 'TR', 'TRVG', 'WKHS', 'XM', 'ZOM'];
#   //   const tickersJSON = [CDNS, ZM, NVDA, GOOG, AAL, AG, AMC, AMD, APHA, BB, BBBY, BYND, CTRM, EXPR, EZGO, GM, GME, GTE, HIMS, INO, IPOE, IPOF, JAGX, KOSS, LLIT, MRNA, MJ, MSOS, NAKD, NCTY, NOK, NVAX, OPEN, RKT, RLX, RYCEY, SBUX, SHLS, SIEB, SLV, SNDL, SOXL, SRNE, STPK, TGC, TIRX, TR, TRVG, WKHS, XM, ZOM];

#   //   for(let i = 0; i < tickers.length; i++) {
#   //     firestore
#   //     .collection("stocks")
#   //     .doc(tickers[i]).set(tickersJSON[i][tickers[i]]);
#   //   }

#   //  }, []);