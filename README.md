# Compensate-MTurk-HIT

As a requester, if something went wrong with your HIT on [Amazon Mechanical Turk](https://www.mturk.com/mturk/welcome),
turkers would ask you to compensate their wasted time and effort. 

You can simply use this code to create an external "Compensate HIT". (Save you some time!)

## Usage ##

The following URL parameters are supported:

- **workers** (required)

  A list of workerId(s) that are allowed to submit this HIT. WorkerIds are separated by commas (,).
  All unlisted workers will not be able to submit this HIT.
  
  ```
  https://your.hit.url.here.html&workers=workerId1,workerId2,workerId3
  ```