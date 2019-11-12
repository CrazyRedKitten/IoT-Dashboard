#!/usr/bin/env python3
import sys
import Adafruit_DHT
from time import sleep
import datetime

humidity, temperature = Adafruit_DHT.read_retry(11, 26)


def main():
    graph_data_list = []
    graph_labels_list = []
    while True:
        date = datetime.datetime.now()
        time = date.strftime("%H:%M")
        graph_labels_list.append(time)
        if len(graph_labels_list) > 8:
            graph_labels_list.pop(0)
        graph_data_list.append(temperature)
        if len(graph_data_list) > 8:
            graph_data_list.pop(0)
        GraphData = open("/var/www/html/GraphData.json", "w")
        GraphData.write('{"labels":"%s","data":"%s"}' % (str(graph_labels_list), str(graph_data_list)))
        GraphData.close()
        sleep(10799)


if __name__ == "__main__":
    main()
