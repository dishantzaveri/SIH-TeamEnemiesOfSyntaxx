import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { View, StyleSheet } from 'react-native';
import LineGraph from '@chartiful/react-native-line-graph';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { height, width } from '../Consts';


export default function Charts() {

    const fetchData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://vismayvora.pythonanywhere.com/news/Top25Fundedcompanybargraphapi/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const fetchGraphs = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=XrZ21zawQLTzsfHhgMRb0aSPUt27OtRf; sessionid=tpxs6ge4xtu4f4shfqsqgnxc4niny1tz");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://vismayvora.pythonanywhere.com/news/Fundingperregionbargraphapi/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchData();
        fetchGraphs();
    }, []);

    const config = {
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
            position: 'right',
            prefix: '$'
        }
    };

    const config1 = {
        startAtZero: false,
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
            prefix: '$',
            offset: 0
        }
    };


    const progress = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const bardata = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };


    const piedata = [
        {
            name: "Pristyn Care",
            population: 96000000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "MPL",
            population: 91000000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Lenskart",
            population: 85000000,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "ByteLearn",
            population: 92000000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Skeps",
            population: 90000000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];



    return (
        <ScrollView>
            <View  style={{ flex: 1, margin: 10 ,alignSelf: "center",alignContent: "center" ,justifyContent: "center" }}>
                <BarChart
                    // style={graphStyle}
                    data={bardata}
                    width={width * 0.8}
                    height={height * 0.3}

                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
                <LineGraph
                    data={[10, 15, 7, 20, 14, 12, 10, 20]}
                    width={width * 0.8}
                    height={height * 0.3}
                    isBezier
                    hasShadow
                    baseConfig={config1}
                    style={styles.chart1}
                />
                <ProgressChart
                    data={progress}
                    width={width * 0.8}
                    height={height * 0.3}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    chart: {
        margin: 20,
        padding: 10,

        borderRadius: 20,
        backgroundColor: 'green',
        width: 350, alignSelf: "center",alignContent: "center" ,justifyContent: "center"
    },
    chart1: {
        margin: 20,
        padding: 10,

        borderRadius: 20,
        width: 350,
        backgroundColor: 'lightblue', alignSelf: "center",alignContent: "center" ,justifyContent: "center"
    },
    chart2:
    {
        margin: 20,
        padding: 10,
        paddingTop: 20,
        borderRadius: 20,
        width: 350,
        backgroundColor: 'green' ,alignSelf: "center",alignContent: "center" ,justifyContent: "center"
    }
});