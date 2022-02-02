FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TECHVISIONLK/TEABOT /root/TEABOT
WORKDIR /root/TEABOT/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
