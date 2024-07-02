package main

import (
//	"fmt"
	"github.com/gofiber/fiber/v2"
	"log"
	"math/rand"
	"strings"
)

// API Routes
// Generate typing test
// Create Lobby
// Join Lobby

func GenerateTest(words []string, length int) string {
	rand.Shuffle(len(words), func(i, j int) {
		words[i], words[j] = words[j], words[i]
	})

	selected := words[:length]
	return string(strings.Join(selected, " "))
}

func main() {
	words := []string{
		"a",
		"about",
		"all",
		"also",
		"and",
		"as",
		"at",
		"be",
		"because",
		"but",
		"by",
		"can",
		"come",
		"could",
		"day",
		"do",
		"even",
		"find",
		"first",
		"for",
		"from",
		"get",
		"give",
		"go",
		"have",
		"he",
		"her",
		"here",
		"him",
		"his",
		"how",
		"I",
		"if",
		"in",
		"into",
		"it",
		"its",
		"just",
		"know",
		"like",
		"look",
		"make",
		"man",
		"many",
		"me",
		"more",
		"my",
		"new",
		"no",
		"not",
		"now",
		"of",
		"on",
		"one",
		"only",
		"or",
		"other",
		"our",
		"out",
		"people",
		"say",
		"see",
		"she",
		"so",
		"some",
		"take",
		"tell",
		"than",
		"that",
		"the",
		"their",
		"them",
		"then",
		"there",
		"these",
		"they",
		"thing",
		"think",
		"this",
		"those",
		"time",
		"to",
		"two",
		"up",
		"use",
		"very",
		"want",
		"way",
		"we",
		"well",
		"what",
		"when",
		"which",
		"who",
		"will",
		"with",
		"would",
		"year",
		"you",
		"your",
	}


	app := fiber.New()

	app.Get("/generate/:length", func(c *fiber.Ctx) error {
		testLength, err := c.ParamsInt("length")
		if err != nil {
			log.Fatal(err)
		}

		// Generate random text based on words list and specified length
		testData := GenerateTest(words, testLength)

		// Return JSON response
		return c.JSON(fiber.Map{
			"text": testData,
		})
	})
	log.Fatal(app.Listen(":3000"))
}
