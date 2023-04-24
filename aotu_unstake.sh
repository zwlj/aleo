#!/bin/bash
while :
do
docker exec shardeum-dashboard operator-cli status | grep standby
if [ $? -eq 0 ]
then
        echo "unstake SHARDEUM"
        docker exec shardeum-dashboard operator-cli unstake
fi
sleep 2m
done