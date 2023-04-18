#!/bin/bash
while :
do
docker exec shardeum-dashboard operator-cli status | grep need-stake
if [ $? -eq 0 ]
then
        echo "stake SHARDEUM"
        docker exec shardeum-dashboard operator-cli stake 10
fi
sleep 2m
done