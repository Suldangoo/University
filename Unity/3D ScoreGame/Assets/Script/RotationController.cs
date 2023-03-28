using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotationController : MonoBehaviour
{
    public float rotationSpeed = 200.0f; // 회전 속도
    public int zRotate = -20;

    // Update is called once per frame
    void Update()
    {
        transform.rotation = Quaternion.Euler(0, Time.time * rotationSpeed, zRotate);
    }
}
