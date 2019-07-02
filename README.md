# Topology Graph Model

**Current version: 1.0.0**

Topology Model is a library containing model of topology graph.

Library contains model for 

* Node (SwitchNode, HostNode, RouterNode)
* Node Interface
* Link
* Enums

It extends Node and Link D3.js model and therefore it can be used in apps using D3.js library.

## Prerequisites
To use the library you need to have installed:
* NPM with private [KYPO Nexus repository](https://projects.ics.muni.cz/projects/kbase/knowledgebase/articles/153)
* Angular Material v8 or higher
* D3.js v5 or higher

## Usage
To use the model in your project follow these steps:
1. Run `npm install kypo2-topology-graph-model`
2. Import model classes like usual, for example `import { Node } from 'kypo2-topology-graph-model`

## Developers

* Martin Hamernik (445720@mail.muni.cz)
