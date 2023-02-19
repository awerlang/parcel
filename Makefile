NAME    := parcel
IMAGE   := parcel
pwd     := $(shell pwd)

.PHONY: build
build:
	@podman build -t ${IMAGE} .

.PHONY: create
create:
	@podman create --rm --tty \
				--name ${NAME} \
                -v ${pwd}:${pwd} \
                -w ${pwd} \
                ${IMAGE} \
				sleep +Inf

.PHONY: start
start:
	@podman start ${NAME}
	@podman exec -it ${NAME} bash

.PHONY: clean
clean:
	@podman stop ${NAME}
