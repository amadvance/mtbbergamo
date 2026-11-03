rm -f *.moz_log

MOZ_LOG=nsHttp:5,cookie:5 MOZ_LOG_FILE=/home/am/data/mtbbergamo/strava/firefox/firefox_cookies.log firefox https://www.strava.com/login

grep -h "CloudFront-Key-Pair-Id" firefox_cookies.log*.moz_log | grep "CloudFront-Policy" | grep "CloudFront-Signature" | grep "_strava_idcf" | tail -n 1 > cookies.txt

python3 proxy.py

