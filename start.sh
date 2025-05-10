#!/bin/bash 

ROOT_DIR=$(pwd)

echo "Building frontend..."
sudo docker build -t ssp/ssp-ui:1.0.0 -f $ROOT_DIR/SalernoShop-Angular/Docker/Dockerfile $ROOT_DIR/SalernoShop-Angular

echo "Building backend..."
sudo docker build -t ssp/ssp:1.0.0 -f $ROOT_DIR/SalernoShopRestService/Docker/Dockerfile $ROOT_DIR/SalernoShopRestService

echo "Starting docker compose..."
sudo docker compose up
