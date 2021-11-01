# Synopsis: 
Implement a PoC which leverage nomad certificates in mTLS protocol for its RPC and http communications.

ref: https://learn.hashicorp.com/tutorials/nomad/security-enable-tls

# Objective 
Quick & dirty implementation. Shortest path to success. No automation.

# Major demostration points
- Authorization
- Node identify <role>.<region> e.g.: client.us-west.nomad
- cfssi certificate generation


# Azure architecture
- 2 VM : east & west
- 2 tier Nodejs appliction 


# App architecture
- fe
- services:
    - add-service
    - multiply-serivce