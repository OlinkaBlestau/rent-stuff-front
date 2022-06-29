import React, {useEffect, useState} from 'react';
import styles from '../../css/Admin/ViewShop.module.css'
import {useParams} from "react-router-dom";
import {fetchShop, fetchThingByUser, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2';
import moment from "moment/moment";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
require('moment/locale/ru');


const Statistics = () => {
    const params = useParams();
    const [things, setThings] = useState([])
    const { t } = useTranslation();

    useEffect(() => {
        let id = localStorage.getItem('id')
        const getThing = async () => {
            const things = await fetchThingByUser(id)
                .then(response => response.data)
                .catch(errors => console.log(errors))
            console.log(things.shop.thing)
            setThings(things.shop.thing)

        }
        getThing().then(r => r.data)
    }, [params.id])

    const options = {
        responsive: true,
        legend: {
            show: false
        }
    };

    const prepareAnimalChart = () => {
        let actionsData = things;
        let monthMoney = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        actionsData.forEach(data => {
            if (new Date(data.created_at).getFullYear() === new Date().getFullYear()) {
                monthMoney[moment(data.created_at).month()] += 1
            }
        })

        return {
            labels: moment.months(),
            datasets: [{
                label: "Announcement",
                data: monthMoney,
                backgroundColor: [
                    'rgba(199, 185, 183, 0.7)'
                ],


            }]
        };
    }
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const bar = {
        width: '90%',
        backgroundColor: '#F2F0F5',
        margin: '50px auto',
        padding: '50px',
        borderRadius: '10px',



    }
    const h2 = {
        fontFamily: 'Rubik, sans-serif',
        position : 'relative',
        top: '20px',
        textAlign: 'center'


    }
    return (
      <div>
          <h2 style={h2}>{t('statistics.titleStatistics')}</h2>
          <Bar style={bar} data={prepareAnimalChart()} options={options}/>
      </div>
    )
}
export default Statistics;
