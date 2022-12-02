# Exercises to solve

## URL parser

- method generateHash in hash.ts
- Consumed in index.ts

## Error alarm

### Approach #1

- Cronjob scheduled to run each 1 minute.
- The first time it runs it won't have a reference for the last error timestamp, but it could have it in subsequent runs.
- As soon as the chronjob starts, it will get the current timestamp and use it as reference.
- It will open the log file
- If there are records but there are no newer records (using the last error time sampt), it will return.
- If there are records and there are newer records, it will iterate through all the items within the last minute, using the reference timestamp to stop the search.
- A counter will accumulate all the error logs in the iteration.
- If the counter reaches to 11, it will trigger the alarm email and the iteration will end.

### Pseudo-code

```
cronjob start (currentTimestamp, lastRecordDate(optional))
open log file
if records
	errorCount = 0
	iterate records (sorted by date desc)
		if lastRecordDate && record <= lastRecordDate
			return
		else
			if errorCount == 11
				send alert email
				return records[0].timeStamp
			else
				errorCount ++
		endif
	end iterate
else
	return
```

### Approach #2 (extension of approach #1)

- Cronjob scheduled to run each 1 minute
- The first time it runs, it will follow all the steps from approach 1
- The subsequent runs it will check the last modified date of the file and only if it's greater than last error date it will open the file and run all the steps from approach 1
- If there's no last error date to use, it will use the previous timestamp (currentTimestamp - 1minute)

## Zoo

- Implemented in zoo.ts
- consumed in index.ts
