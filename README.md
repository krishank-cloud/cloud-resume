# Krishan Kumar - AWS Cloud Resume Portfolio

Live portfolio: [https://krishankcloud.com](https://krishankcloud.com)  
Live dashboard: [https://dashboard.krishankcloud.com](https://dashboard.krishankcloud.com)  
Project details: [https://krishankcloud.com/project-details.html](https://krishankcloud.com/project-details.html)

## Overview

This repository contains my AWS cloud resume portfolio project, built as part of my transition into cloud and IT through hands-on learning.

The project demonstrates practical AWS skills across static website hosting, secure content delivery, serverless backend logic, database updates, monitoring, CI/CD automation, security hardening and troubleshooting.

I am AWS Cloud Practitioner certified and currently studying Certificate IV in Information Technology through TAFE NSW Digital.

## Project Summary

The project started as a cloud resume website and grew into a small cloud operations environment with:

- A public portfolio website
- A dashboard subdomain
- A serverless visitor counter
- DynamoDB-backed visitor data
- CloudWatch logs and metrics
- GitHub Actions CI/CD deployment
- CloudFront cache invalidation
- Security hardening through private S3 access and Origin Access Control

## Architecture

```text
User Browser
   |
   v
Route 53 DNS + ACM TLS Certificate
   |
   v
CloudFront Distribution
   |
   v
Private S3 Bucket protected by Origin Access Control
   |
   +----------------------------------------------------+
                                                        |
                                                        v
                                                Portfolio Website
                                                        |
                                                        v
Dashboard / Visitor Counter Frontend
                                                        |
                                                        v
API Gateway  --->  Lambda Python Function  --->  DynamoDB
                                                        |
                                                        v
                                             CloudWatch Logs + Metrics
AWS Services Used
Service	Purpose
Amazon S3	Stores static website files
Amazon CloudFront	Delivers the website through a CDN and supports HTTPS
Origin Access Control	Keeps the S3 bucket private and restricts access through CloudFront
Route 53	Manages DNS for the custom domain and dashboard subdomain
AWS Certificate Manager	Provides TLS/HTTPS certificates
API Gateway	Exposes the serverless visitor counter API
AWS Lambda	Runs Python backend logic for the visitor counter
DynamoDB	Stores total views and unique visitor records
CloudWatch	Provides logs, metrics and dashboard visibility
GitHub Actions	Deploys updates to S3 and invalidates CloudFront
AWS CLI	Used for deployment checks, S3 operations and CloudFront invalidations
Key Features
Secure Static Website Hosting

The portfolio is hosted using S3 and CloudFront, with HTTPS enabled through ACM and DNS managed through Route 53.

Private S3 Access

The S3 bucket is designed to be accessed through CloudFront using Origin Access Control rather than exposing the bucket directly.

Serverless Visitor Counter

The visitor counter uses API Gateway, Lambda and DynamoDB to update and retrieve visitor statistics.

Live Operations Dashboard

The dashboard displays visitor statistics and demonstrates monitoring concepts using CloudWatch metrics and backend API data.

CI/CD Deployment

GitHub Actions deploys changes to AWS after pushes to the main branch. The workflow:

Checks out the repository
Configures AWS credentials using GitHub Secrets
Syncs static assets to S3
Uploads HTML files with cache-control headers
Invalidates both CloudFront distributions
Security and Credential Handling

This project uses GitHub Secrets for deployment-related values such as AWS credentials, AWS region, S3 bucket name and CloudFront distribution IDs.

Git operations were moved away from password-style authentication and configured with SSH-based access.

Troubleshooting Wins

This project involved real troubleshooting across multiple AWS and development layers.

Issue	What I Practised
S3 / CloudFront 403 errors	Checked missing files, object paths, bucket policy behaviour and CloudFront origin access
OAC/private S3 access	Worked through private bucket access using CloudFront Origin Access Control
API Gateway / Lambda 500 errors	Used response testing and CloudWatch logs to debug backend behaviour
DynamoDB reserved keyword issue	Fixed update expression problems using expression attribute names
CloudFront stale content	Used manual and automated invalidations after deployment changes
CSP/browser security issues	Worked through blocked scripts, styles and API calls
GitHub Actions YAML failure	Debugged deployment failure caused by a broken S3 sync exclude line
Git authentication issues	Moved from password/token problems to SSH-based Git access
DNS and certificate issues	Troubleshot Route 53 records, ACM certificates and CloudFront aliases
AI-Assisted Learning and Documentation

AI tools were used as a learning and troubleshooting assistant during this project.

AI helped with:

Breaking down AWS concepts
Structuring troubleshooting steps
Improving documentation
Planning project improvements

AI output was not treated as automatically correct. Changes were verified through:

AWS Console checks
CloudWatch logs and metrics
GitHub Actions logs
Terminal commands
Browser testing
Live endpoint testing
Skills Demonstrated
AWS architecture fundamentals
S3 and CloudFront hosting
CloudFront Origin Access Control
Route 53 DNS configuration
ACM certificate setup
API Gateway and Lambda basics
DynamoDB update expressions
CloudWatch logs, metrics and dashboards
GitHub Actions CI/CD
GitHub Secrets
AWS CLI
Git and SSH authentication
Security header and CSP troubleshooting
Technical documentation
Incident-style troubleshooting
Current Status

The project is live and actively being improved as part of my transition into cloud engineering.

Planned Improvements

Future improvements may include:

AWS Budget alerts for cost monitoring
CloudWatch Alarm and SNS email notifications for backend errors
Basic AWS WAF protection
Architecture diagram screenshots
Additional project cards on the portfolio homepage
A small AI Cloud Support Triage Assistant mini-project
About Me

I am an AWS Cloud Practitioner certified aspiring cloud engineer currently studying Certificate IV in Information Technology through TAFE NSW Digital.

My goal is to build practical cloud, support, networking, Linux, security and troubleshooting skills through real projects that I can explain, maintain and improve.
