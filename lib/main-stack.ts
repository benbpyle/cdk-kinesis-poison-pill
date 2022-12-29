import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {OneLambda} from "./one-lambda";
import {StackProps} from "aws-cdk-lib";

export class MainStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const mainFunc = new OneLambda(this, 'PccPatientPrep')
    }
}
