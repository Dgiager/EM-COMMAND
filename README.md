# EM Command

EM Command is a responsive emergency-management dashboard designed around Fairview / Major County, Oklahoma. It combines a live NWS alert feed, NWS observations and forecast, a current GOES-19 satellite image, resource-launch tiles, an EOC-status selector, and a local incident log.

## Included services

- NOAA/NESDIS GOES-19 imagery
- National Weather Service alerts, observations, and forecast
- Oklahoma Mesonet
- OK-First
- RadarFirst launch page
- FEMA emergency-manager resources
- U.S. Department of Homeland Security
- ArcGIS QuickCapture
- NWS Norman, SPC, WPC, Oklahoma Emergency Management, FEMA NIMS/IPAWS, and CISA

## Run it

### Fastest method

Double-click `index.html`. Live public-data calls normally work in current Chrome and Edge browsers. Install/offline features require a local web server or HTTPS hosting.

### Windows local server

Double-click `start-windows.bat`. It uses Python, if installed, and opens the app at:

`http://localhost:8080`

You can also open a command prompt in this folder and run:

`python -m http.server 8080`

Then browse to `http://localhost:8080`.

## Install it like an app

When served from `localhost` or an HTTPS website, Chrome or Edge can show an **Install App** button. Installing creates a standalone app window and caches the local interface. Live weather and linked services still require internet access.

## Configure it

Open **Settings** to change:

- Dashboard title
- Location label
- Latitude and longitude used by the NWS API
- ArcGIS QuickCapture project/launch URL
- RadarFirst or OK-First launch URL

Settings are stored only in the current browser.

## Incident log

Incident entries remain in browser local storage and can be exported as CSV. This prototype does not synchronize entries between devices or users. For multiuser use, connect it to an approved database, ArcGIS feature service, or EOC platform with authentication and audit logging.

## Security and operational limits

- The app does not store external-service usernames or passwords.
- Password-protected services open in their own tabs.
- The dashboard uses public internet endpoints and is not a replacement for NWSChat, IPAWS, EMWIN, NOAA Weather Wire, dispatch systems, radio systems, or approved jurisdictional procedures.
- NOAA’s public GOES imagery viewer includes its own operational-use limitations. Confirm critical decisions through approved and redundant sources.
- Review agency cybersecurity, records-retention, accessibility, and public-record requirements before production deployment.

## Suggested production upgrades

- Agency login and role-based permissions
- ArcGIS QuickCapture feature-service integration
- Shared ICS-214 / activity log
- Resource requests and mission assignments
- WebEOC or other EOC-system integration
- Local road closures, siren status, shelters, cameras, and utility layers
- Push notifications
- Audit trail, backups, and records-retention controls
