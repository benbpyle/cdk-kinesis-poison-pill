package main

import (
	"context"
	"github.com/aws/aws-lambda-go/events"
	"log"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(handler)
}

func handler(ctx context.Context, e events.KinesisEvent) error {
	for _, r := range e.Records {
		log.Printf("Printing out the record %v\n", r)
	}

	return nil
}
