# Topology Graph Model

Topology Model is a library containing model of topology graph.

Library contains model for 

* Node (SwitchNode, HostNode, RouterNode, SpecialNode)
* Node Port
* Link
* Enums

It extends Node and Link D3.js model and therefore it can be used in apps using D3.js library.

## Prerequisites
To use the library you need to have installed:
* NPM with access to [KYPO registry](https://projects.ics.muni.cz/projects/kbase/knowledgebase/articles/153)

## Usage
To use the model in your project follow these steps:
1. Run `npm install @muni-kypo-crp/topology-model`
2. Import model classes like usual, for example `import { Node } from '@muni-kypo-crp/topology-model`
